/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('petImages').del()
  await knex('pets').del()

  await knex('pets').insert([
    {
      id: 1,
      ownerId: 'auth0|123456789',
      name: 'Bella',
      age: 2,
      animal: 'dog',
      bio: 'Bella is a sweet dog',
      patchPoints: 11987,
      scratchPoints: 7632,
      impressions: 21983,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      ownerId: 'auth0|123456789',
      name: 'Scout',
      age: 1,
      animal: 'cat',
      bio: 'A terror of night and day, I am the ruler of these lands.',
      patchPoints: 18234,
      scratchPoints: 1789,
      impressions: 20586,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 3,
      ownerId: 'auth0|123456789',
      name: 'Hugo',
      age: 1,
      animal: 'cat',
      bio: "I'm hungry but my bowl is only 80% full, time to YELL",
      patchPoints: 1789,
      scratchPoints: 18234,
      impressions: 20586,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 4,
      ownerId: 'auth0|123456789',
      name: 'Brazen',
      age: 2,
      animal: 'cat',
      bio: 'An image of beauty and brains, minus the brains. Meow. Feed me and give me love and I will do the same for you...r feet.',
      patchPoints: 4807,
      scratchPoints: 3479,
      impressions: 10777,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 5,
      ownerId: 'auth0|123456789',
      name: 'Frankie',
      age: 7,
      animal: 'dog',
      bio: 'Run fast, live life, eat peanut butter.',
      patchPoints: 52321,
      scratchPoints: 198345,
      impressions: 401398,
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
  ])
  await knex('petImages').insert([
    {
      id: 1,
      petId: 2,
      url: 'https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 2,
      petId: 2,
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 3,
      petId: 3,
      url: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 4,
      petId: 4,
      url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60=80',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
    {
      id: 5,
      petId: 5,
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
    },
  ])
}
