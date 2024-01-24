const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});