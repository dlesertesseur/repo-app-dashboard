import IndicatorsDao from "../persistence/nomgoDb/indicators.dao.js";
import RetailerStoresDao from "../persistence/nomgoDb/retailerStores.dao.js";
import WorkingInStoreDao from "../persistence/nomgoDb/workingInStore.dao.js";

const acumData = (table, detalle) => {
  let group = null;
  for (let index = 0; index < detalle?.length; index++) {
    const element = detalle[index];
    group = table.get(element.destino);
    if (!group) {
      group = [];
      table.set(element.destino, group);
    }

    group.push(element);
  }
};

const process = async () => {
  const indicatorsDao = new IndicatorsDao();
  const storesDao = new RetailerStoresDao();
  const workingInStore = new WorkingInStoreDao();

  const indicators = await indicatorsDao.getAll();
  const stores = await storesDao.getAllByRetailId("644e9bf2118088ea1e892469"); //Jumbo

  const storeByName = new Map(stores.map((obj) => [obj.name, obj]));

  const arr = indicators[0].indicador;

  const table = new Map();

  //Acumula los operaris por destino
  for (let index = 0; index < arr.length; index++) {
    const idx = arr[index];
    const detalle = idx.detalle;

    acumData(table, detalle);
  }

  //Crea la informacion
  const ret = [];
  const destinos = table.keys();

  for (const destino of destinos) {
    const store = storeByName.get(destino);
    if (store) {
      const operators = table.get(store.name);
      store["operators"] = operators;
      ret.push(store);
      
      console.log(
        "Asigna operarios ",
        operators?.length,
        " al destion ",
        store.name
      );
    }
  }

  // if(ret){
  //   ret.forEach(element => {
  //     workingInStore.create(element);
  //     console.log("###### create ", element.name);
  //   });
  // }
};

process();
