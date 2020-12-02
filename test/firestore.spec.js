import MockFirebase from 'mock-cloud-firestore';


const fixtureData = {
  __collection__: {
    pots: {
      __doc__: {
        abc123: {
          note: 'testear el proyecto',
        },
        abc456: {
          note: 'terminar el proyecto',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
