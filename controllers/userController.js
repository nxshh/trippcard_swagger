exports.signup = (req, res) => {
    const { email, password, phoneNumber } = req.body;

    if (!email || !password || !phoneNumber) {
        return res.status(400).json({ msg: 'Missing required fields' });
    }

    res.status(200).json({
        msg: 'User created successfully',
        user: { email, phoneNumber }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Missing email or password' });
    }

    res.status(200).json({
        msg: 'Login successful',
        user: { email, phoneNumber: '9999999999' }
    });
};

exports.getUsers = (req, res) => {
    res.status(200).json([
        { email: 'user1@example.com', phoneNumber: '1111111111' },
        { email: 'user2@example.com', phoneNumber: '2222222222' }
    ]);
};

exports.updateUser = (req, res) => {
    const { currentEmail, newEmail, newPhoneNumber } = req.body;

    if (!currentEmail) {
        return res.status(400).json({ msg: 'Current email is required' });
    }

    res.status(200).json({
        msg: 'User updated successfully',
        user: { email: newEmail || currentEmail, phoneNumber: newPhoneNumber || '9999999999' }
    });
};

exports.deleteUser = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ msg: 'Email is required' });
    }

    res.status(200).json({ msg: 'User soft deleted successfully', email });
};
