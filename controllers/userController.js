const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signup
exports.signup = async (req, res) => {
    const { email, password, phoneNumber } = req.body;

    try {
        let existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
            phoneNumber
        });

        res.json({ msg: 'User created successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email, isDeleted: false } });
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        res.json({ msg: 'Login successful', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: { isDeleted: false }, attributes: { exclude: ['password'] } });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update User
exports.updateUser = async (req, res) => {
    const { currentEmail, newEmail, newPassword, newPhoneNumber } = req.body;

    try {
        const user = await User.findOne({ where: { email: currentEmail, isDeleted: false } });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        if (newEmail) user.email = newEmail;
        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
        }
        if (newPhoneNumber) user.phoneNumber = newPhoneNumber;

        await user.save();
        res.json({ msg: 'User updated successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


// Soft Delete User
exports.deleteUser = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.isDeleted = true;
        await user.save();

        res.json({ msg: 'User soft deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
