import db from '/functions/database'

export default async function getProjects() {
  return new Promise(resolve => {
    db.all(`SELECT * FROM Projects`, (err, rows) => {
      const projects = rows.map(row => {
        return {
          id: row.id,
          name: row.name,
          image: row.image,
          description: row.description,
          visit: row.visit,
          repository: row.repository,
          contributors: JSON.parse(row.contributors),
          tags: JSON.parse(row.tags),
          date: row.date
        }
      })
      resolve(projects)
    })
  })
}