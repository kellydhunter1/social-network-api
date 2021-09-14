const {Schema, model } = require('mongoose');

const User = new Schema(
    {
        username: {
            type: String,
            required: "Please enter your username",
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: "Please enter your e-mail address",
            unique: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },

        toJSON: {
            virtuals: true,
            gettters: true
        },

        id: false

}
);


UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;