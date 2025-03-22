const express = require('express');
const app = express();
const port = 3000;

const medicamentos = [
    {
        "nome": "Amoxicilina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de infecções bacterianas como amigdalite, otite, pneumonia"],
        "dosagem": "Comprimidos de 500 mg, geralmente administrados a cada 8 ou 12 horas, dependendo da gravidade da infecção"
    },
    {
        "nome": "Cetorolaco",
        "fabricante": "Vários fabricantes",
        "indicações": ["Alívio de dores agudas de intensidade moderada a grave, como dor pós-operatória"],
        "dosagem": "Comprimidos de 10 mg, administrados a cada 4-6 horas, sem ultrapassar 40 mg por dia"
    },
    {
        "nome": "Clonazepam",
        "fabricante": "Roche",
        "indicações": ["Tratamento de transtornos de ansiedade, epilepsia e síndrome do pânico"],
        "dosagem": "Comprimidos de 0,5 mg a 2 mg, administrados de acordo com a necessidade, com ajuste gradual"
    },
    {
        "nome": "Loratadina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de alergias, como rinite alérgica e urticária"],
        "dosagem": "Comprimidos de 10 mg, geralmente tomados uma vez ao dia"
    },
    {
        "nome": "Furosemida",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de edemas e insuficiência cardíaca congestiva"],
        "dosagem": "Comprimidos de 20 mg a 80 mg, administrados uma vez ao dia, com ajustes conforme resposta do paciente"
    },
    {
        "nome": "Ibuprofeno",
        "fabricante": "Vários fabricantes",
        "indicações": ["Alívio de dor leve a moderada, febre e inflamações"],
        "dosagem": "Comprimidos de 200 mg a 400 mg, tomados a cada 4-6 horas, não ultrapassando 1.200 mg por dia"
    },
    {
        "nome": "Cloridrato de Paroxetina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de depressão, transtorno obsessivo-compulsivo (TOC), transtorno de ansiedade generalizada"],
        "dosagem": "Comprimidos de 20 mg a 40 mg, tomados uma vez ao dia"
    },
    {
        "nome": "Espironolactona",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de hipertensão, edema e insuficiência cardíaca"],
        "dosagem": "Comprimidos de 25 mg a 100 mg, administrados uma vez ao dia"
    },
    {
        "nome": "Nifedipina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento da hipertensão arterial e angina pectoris"],
        "dosagem": "Comprimidos de 10 mg a 20 mg, administrados uma vez ao dia"
    },
    {
        "nome": "Fluconazol",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de infecções fúngicas como candidíase e meningite criptocócica"],
        "dosagem": "Comprimidos de 150 mg a 200 mg, administrados conforme a infecção, geralmente uma vez ao dia"
    }
]



app.get('/medicamentos-tarja-amarela', (req, res) => {
  res.json(medicamentos);
});

app.get('/medicamentos-tarja-amarela/:nome', (req, res) => {
  const nome = req.params.nome.toLowerCase();
  const medicamento = medicamentos.find(m => m.nome.toLowerCase() === nome);
  if (medicamento) {
    res.json(medicamento);
  } else {
    res.status(404).json({ mensagem: "Medicamento não encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});