(async () => {
  const database = require("./db");
  const Aluno = require("./aluno");
  await database.sync();

  const alunos = await Aluno.findByPk(3);
  await alunos.destroy(1);
})();
