const users = [
  { id: 1, name: 'Jhon', email: 'jhon@gmail.com' },
  { id: 2, name: 'Doe', email: 'doe@gmail.com' },
  { id: 3, name: 'Eric', email: 'eric@gmail.com' },
  { id: 4, name: 'Fritz', email: 'fritz@gmail.com' },
];
const service = {
  getAll: (req, res) => {
    res.json({
      data: users,
      status: 'success',
    });
  },
  getDetail: (req, res) => {
    const user = users.find((item) => `${item.id}` === req.params.id);
    res.json({
      data: user,
      status: 'success',
    });
  },
};

export default service;
