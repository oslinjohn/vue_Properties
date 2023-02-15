<template>
    <router-link :to="{ name: 'Property', params: { id: property.id } }">
        <img :src="property.image_url" :alt="property.title" />
        <h3>
            {{ property.title }}
        </h3>
        <p>Area: {{ property.area }}</p>
        <p>Price: R{{ property.price }}</p>
    </router-link>
</template>

<script>
export default {
    props: ["property"],
};
</script>

<style scoped>
img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>
