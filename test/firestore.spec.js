import MockFirebase from 'mock-cloud-firestore';
import {
  Post,
  deleteNote,
  onGetPost,
  update,
} from '../src/Mvc/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    user: {
      __doc__: {
        abc1d: {
          name: 'liz',
          email: 'liz@gmail.com',
          uid: 'abcd',
          photoUrl: '',
        },
      },
    },
    pots: {
      __doc__: {
        abc2d: {
          userID: '01',
          name: 'andrea',
          note: 'agregando Post',
          date: '',
          status: 'public',
        },
      },
    },
  },
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('Post', () => {
  it('Deberia crear un post', done => Post('01', 'andrea', 'agregando post', '', 'public')
    .then(() => onGetPost(
      (data) => {
        console.log(data);
        done();
      },
    )));
});

describe('Delete a post', () => {
  it('Debería poder eliminar un post', done => deleteNote('id_02')
    .then(() => onGetPost(
      (data) => {
        const result = data.find(post => post.id === 'id_02');
        expect(result).toBe(undefined);
        done();
      },
    )));
});


describe('update', () => {
  it('Debería poder editar un post con el id: abc2d', done => update('abc2d', 'que sea un lindo día').then(() => onGetPost((data) => {
    const result = data.find(post => post.note === 'que sea un lindo día');
    expect(result.note).toBe('que sea un lindo día');
    done();
  })));
});
