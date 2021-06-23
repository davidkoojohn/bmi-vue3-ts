<template>
  <h1>TypeScript</h1>
</template>

<script lang="ts" setup>

interface IPerson {
  firstName: string,
  lastName: string
}


const fullName = (person: IPerson) => {
  return person.firstName + ' - ' + person.lastName
}

console.log(fullName({
  firstName: '123',
  lastName: 'john'
}))

</script>
