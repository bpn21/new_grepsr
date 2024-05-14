<template>
  <div class="q-pa-lg">
    <div class="q-gutter-sm q-py-md row">
      <div class="col-md-12 col-xs-12 text-center">
        <HeaderComponent :title="'Kalimati Fruits and Vegetable Market'" />
      </div>
      <div class="col-md-5 col-xs-12">
        <q-input
          dense
          v-model="search"
          style="min-width: 320px"
          label="Search"
          size="xs"
        ></q-input>
      </div>
      <div class="col-md-3 col-xs-5 row justify-end">
        <q-btn
          label="Example"
          size="sm"
          style="font-size: 14px; float: right; min-width: 180px"
          @click="getExample()"
          no-caps
        ></q-btn>
      </div>
      <div class="col-md-3 col-xs-5 row justify-end">
        <q-btn
          label="Get Todays Price"
          size="sm"
          style="font-size: 14px; float: right; min-width: 180px"
          :disable="true"
          @click="getExample()"
          no-caps
        ></q-btn>
      </div>
    </div>

    <q-table
      title="Vegitables price"
      :rows="filterRows"
      :columns="columns"
      row-key="name"
    >
      <q-pagination v-model="current" :max="8"
    /></q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: 'Product',
    required: true,
    label: 'Commodity',
    align: 'left',
    field: (row) => row.Product,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Maximum',
    align: 'center',
    label: 'Maximum',
    field: 'Maximum',
    sortable: true,
  },
  { name: 'Minimum', label: 'Minimum', field: 'Minimum', sortable: true },
  { name: 'Average', label: 'Average', field: 'Average' },
  { name: 'Date', label: 'Date', field: 'Date' },
];

import { ref, computed } from 'vue';
import HeaderComponent from 'src/components/HeaderComponent.vue';
import useData from 'src/use/data';
export default {
  components: {
    HeaderComponent,
  },
  setup() {
    const { dailyVegitablFruitsPriceExample } = useData();
    const rows = ref([]);
    const checkbox = ref(false);
    const search = ref('');

    const getExample = () => {
      dailyVegitablFruitsPriceExample().then((res) => {
        rows.value = res.data;
      });
    };

    const filterRows = computed(() => {
      const product = rows.value.filter((i) => {
        if (search.value.length > 0) {
          const product = i.Product.toLowerCase().includes(
            search.value.toLowerCase()
          );
          return product;
        } else {
          return true;
        }
      });
      return product;
    });

    return {
      getExample,
      filterRows,
      columns,
      rows,
      search,
      checkbox,
    };
  },
};
</script>
