<template>
    <section id="page_error">
        <NotFound code="404" />
    </section>
</template>

<script>
import NotFound from '@/components/layout/NotFound.vue';
export default {
    components:{
        NotFound
    }
}
</script>