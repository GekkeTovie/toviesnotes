const searchDialog = document.querySelector('#cauldron-search-dialog');
const searchButton = document.querySelector('#search-open');
const searchQuery = document.querySelector('#search-query');
const searchStatus = document.querySelector('#search-status');
const searchMatches = document.querySelector('#search-matches');
const locale = document.documentElement.lang;
let indexRequest;

function searchText(value) {
  return value.toLocaleLowerCase(locale).normalize('NFD').replace(/\p{M}/gu, '');
}

function getIndex() {
  if (!indexRequest) {
    indexRequest = fetch('/searchIndex.json')
      .then(response => {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      })
      .then(notes => notes.filter(note => (!note.locale || note.locale === locale) && /^\/(?!\/)/.test(note.url)).map(note => ({
        title: note.title,
        url: note.url,
        titleSearch: searchText(note.title),
        bodySearch: searchText(`${(note.tags || []).join(' ')} ${note.content || ''}`)
      })))
      .catch(error => {
        indexRequest = undefined;
        throw error;
      });
  }
  return indexRequest;
}

async function showMatches() {
  const rawQuery = searchQuery.value;
  const terms = searchText(rawQuery.trim()).split(/\s+/).filter(Boolean);
  searchMatches.replaceChildren();
  searchStatus.textContent = '';
  if (!terms.length) return;

  try {
    const notes = await getIndex();
    if (searchQuery.value !== rawQuery) return;
    const matches = notes
      .filter(note => terms.every(term => note.titleSearch.includes(term) || note.bodySearch.includes(term)))
      .map(note => ({ note, score: terms.filter(term => note.titleSearch.includes(term)).length }))
      .sort((first, second) => second.score - first.score)
      .slice(0, 12);
    searchStatus.textContent = matches.length ? '' : searchDialog.dataset.emptyMessage;
    searchMatches.replaceChildren();
    for (const { note } of matches) {
      const row = document.createElement('li');
      const link = document.createElement('a');
      link.href = note.url;
      link.textContent = note.title;
      row.append(link);
      searchMatches.append(row);
    }
  } catch {
    if (searchQuery.value === rawQuery) searchStatus.textContent = searchDialog.dataset.errorMessage;
  }
}

function openSearch() {
  if (!searchDialog.open) searchDialog.showModal();
  searchQuery.focus();
}

searchButton.addEventListener('click', openSearch);
document.querySelector('#search-close').addEventListener('click', () => searchDialog.close());
searchDialog.addEventListener('close', () => searchButton.focus());
searchDialog.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    searchDialog.close();
  }
});
searchQuery.addEventListener('input', showMatches);
searchQuery.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown') {
    const firstResult = searchMatches.querySelector('a');
    if (firstResult) {
      event.preventDefault();
      firstResult.focus();
    }
  }
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (searchDialog.open) searchDialog.close();
    else openSearch();
  }
});

const initialQuery = new URLSearchParams(window.location.search).get('q');
if (initialQuery) {
  searchQuery.value = initialQuery;
  openSearch();
  showMatches();
}
