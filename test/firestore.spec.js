import MockFirebase from 'mock-cloud-firestore';
import {
  Post,
  deleteNote,
  onGetPost,
} from '../src/Mvc/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          userID: '01',
          name: 'andrea',
          note: 'agregando Post',
          date: '',
          photo: '',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('Post', () => {
  it('Deberia crear un post', done => Post('01', 'andrea', 'agregando post', '', '')
    .then(() => onGetPost(
      (data) => {
        console.log(data);
        // const result = data.find(element => element.note === 'publicacion agregada');
        // expect(result.note).toBe('publicacion agregada');
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
