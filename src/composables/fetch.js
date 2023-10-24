import { onBeforeMount, ref } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const searchInformations = async (code) => {
    try {
      const req = await fetch(url);
      const json = await req.json();
      data.value = json.data;
    } catch (err) {
      error.value = `Erro ao obter informações na API.`;
    } finally {
      loading.value = false;
    }
  };

  onBeforeMount(async () => {
    await searchInformations();
  });
  return {
    data,
    error,
    loading,
  };
}
