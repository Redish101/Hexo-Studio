const db = await this.$store.dispatch('d2admin/db/database')

const dbSet = (key, values) => {
  return db.set(key, values).write()
}

const dbGet = (key) => {
  return db.get(key).value()
}

export { dbSet, dbGet }
