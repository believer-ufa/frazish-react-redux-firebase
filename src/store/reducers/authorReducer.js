const initState = {
  authors: [
    {
      id: '111',
      name: 'F.M.Dostoevsky',
      image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
    },
    {
      id: '222',
      name: 'L.N.Tolstoy',
      image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
    },
    {
      id: '333',
      name: 'J.R.R.Tolkien',
      image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
    },
    {
      id: '444',
      name: 'W.Shakespear',
      image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
    },
    {
      id: '555',
      name: 'Ch.Dickens',
      image: 'https://i.warosu.org/data/lit/img/0103/79/1512891765207.jpg'
    }
  ]
};

const authorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_AUTHOR':
      console.log('added author', action.author);
      //console.log('state', state.authors);
      const authors = [...state.authors, { id: '0000', ...action.author }];
      return { ...state, authors };
    default:
      console.log('some action happended');
  }
  return state;
};

export default authorReducer;
