<template>
  <div>
    <div>Users</div>

    <ul>
      <li v-for="user in users" :key="user.id" @click="getCurrentUser(user.id)">
        <div>id: {{ user.id }}</div>
        <div>email: {{ user.email }}</div>
        <div>firstName: {{ user.firstName }}</div>
        <div>lastName: {{ user.lastName }}</div>
        <div>password: {{ user.password }}</div>
        <div>createdAt: {{ user.createdAt }}</div>
        <div>updatedAt: {{ user.updatedAt }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const router = useRouter();
const { data: users } = await useFetch("/api/users");

// console.log(users);

const getCurrentUser = (id) => {
  router.push(`/${id}`);
};
</script>
