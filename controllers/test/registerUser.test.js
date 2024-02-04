const { registerUser } = require('../user');
const User = require('../../models/User');
const { validatePassword } = require('../validatePassword');

const request = {
  body: {
    username: 'fakeusername',
    email: 'fakeemail@mail.com',
    password: 'fakepassword1',
  },
};

// Mock console.log to prevent errors related to logging
jest.spyOn(console, 'log').mockImplementation(() => {});

it('should send status code of 400 when user exists', async () => {
  const response = {
    status: jest.fn(() => response),
    send: jest.fn(),
  };

  // Assuming you have access to a mock of User model for findOne method
  jest.spyOn(User, 'findOne').mockResolvedValue({});

  await registerUser(request, response);

  // Add assertions to check the expected behavior
  expect(response.status).toHaveBeenCalledWith(400);
  expect(response.send).toHaveBeenCalledWith({
    error: 'Email already exists, please use a different email',
  });
});

it('should register a new user and send status code of 201', async () => {
  const response = {
    status: jest.fn(() => response),
    send: jest.fn(),
  };

  const mockUser = {
    username: 'fakeusername',
    email: 'fakeemail@mail.com',
    password: 'fakepassword1',
  };

  jest.spyOn(User, 'findOne').mockResolvedValue(null);
  jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);

  await registerUser(request, response);

  expect(response.status).toHaveBeenCalledWith(201);
  expect(response.send).toHaveBeenCalledWith({
    message: 'New user has been registered',
    user: expect.objectContaining(mockUser),
  });
});

it('should log an error when an exception occurs during registration', async () => {
  const response = {
    status: jest.fn(() => response),
    send: jest.fn(),
  };

  jest.spyOn(User, 'findOne').mockRejectedValue(new Error('Some database error'));

  await registerUser(request, response);

  // You can also check if the error is logged, depending on your logging implementation
  expect(console.log).toHaveBeenCalledWith({
    error: 'Some database error',
  });
});
