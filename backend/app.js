const db = require('./config/db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/api/ping', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando 🚀' });
});

const usuariosRoutes = require('./routes/usuariosRoutes');
app.use('/api/usuarios', usuariosRoutes);


const PORT = process.env.PORT || 3000;
// Probar conexión a la base de datos
db.getConnection()
  .then(() => console.log('✅ Conectado a MySQL'))
  .catch((err) => console.error('❌ Error de conexión a MySQL:', err));

app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});

