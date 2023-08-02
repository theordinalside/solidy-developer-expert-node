/** 
 * @description All the Error messages that needed to be sent to Admin or App
 * @type {Object}
*/
module.exports.ErrorMessage = Object.freeze({
    INVALID_TOKEN: 'Unauthorized user.',
    COUNTRY_EXIST: 'Country name already exist',
    INTERNAL_ERROR: 'Internal Server Error.',
    INVALID_CREDENTIAL: 'Invalid credentials.',
    SOMETHING_WRONG: 'Something went wrong!',
    ALREADY_EXIST: 'Already exists.',
    NO_TOKEN: 'Please provide token.',
    EMAIL_NOT_REGISTERED: 'Provided email is not registered.',
    NOT_REGISTERED: "Provided email/mobile number is not registered.",
    RESET_PASSWORD_EXPIRED: 'Your Token has expired.',
    WRONG_PASSWORD: 'Please enter valid password.',
    INVALID_MOBILE: 'This mobile number is not valid.',
    EMAIL_EXIST: 'This email already exists.',
    NOT_FOUND: 'Requested data not found.',
    USER_NOT_FOUND: 'This user does not exist.',
    UPDATE_NOT: "Unexpected error during update, please try again.",
    MOBILE_EXIST: 'This mobile number already exists.',
    USERNAME_EXIST: 'This user name already exists.',
    USER_ID: 'A valid User Id is required.',
    BLOCKED_BY_ADMIN: 'You are not authorized, please contact Admin.',
    DELETED_BY_ADMIN: 'Your account is deleted, please contact Admin.',
    FIELD_REQUIRED: 'Fields are required.',
    OLD_PASSWORD: 'You have provided an incorrect old password.',
    INCORRECT_JWT: 'Invalid JWT token.',
    FORBIDDEN: 'There was an error in sending email.',
    INVALID_OTP: 'Invalid OTP',
    OTP_EXPIRED: "OTP has expired, please try resend OTP.",
    PASSMATCH: "Password do not match.",
    EVENT_EXISTS: "Event already added",
    NOT_MATCH: "Password not matched.",
    CODE_NOT_FOUND: "Please enter a vaild code",
    LIST_EMPTY: "Empty List ",
    SESSION_STARTED: "Session has been started you can not join now.",
    SESSION_CREATED: "Session has been already created with that generated code.",
    SONG_NOT_REMOVE: "You cannot remove this song.",
    WALLET_EXIST: "Wallet address already exist!",
    LIMIT_EXCEEDED: "Limit exceeded.",
    ALREADY_DOMAIN: "This domain is already in use.",
    ALREADY_VETTED: "This token id is already in use.",
    EMPTY_PARAMS:"Empty parameters provided!!",
    VOTE_ALREADY_EXIST:"User vote already added!",
    ALREADY_ADDED: "Not Allow, As you have already added add.",
    LIMIT_EXCEED:"You can't buy more the 3 ads."
});

/** 
 * @description All the Success messages that needed to be sent to App or Admin
 * @type {Object}
*/
module.exports.SuccessMessage = Object.freeze({
    SIGNUP_SUCCESSFULLY: "Thanks, You have successfully signed up.",
    LOGIN_SUCCESS: 'Your login is successful.',
    CUSTOMER_VERIFY: 'Customer verified successfully',
    FORGET_SUCCESS: 'A password link has been sent to your registered ID.',
    RESET_SUCCESS: 'Your password was successfully changed.',
    PRODUCT_LIST_FETCH: 'Successfully fetched product list.',
    USER_LIST_FETCH: 'Successfully fetched user list.',
    AUTHORIZATION: 'This User is Authorized.',
    ACCOUNT_CREATION: 'Your account has been created successfully.',
    EMAIL_SEND: "Otp has been sent to your registered Email successfully.",
    OTP_SEND: 'Otp has been sent to your registered mobile number.',
    VERIFY_OTP: 'OTP verified successfully.',
    PIN_SET: "Your Pin has been set successfully.",
    PASSWORD_UPDATE: "Your password has been updated successfully.",
    DATA_SAVED: "Data is saved successfully.",
    DETAIL_GET: "Details have been fetched successfully.",
    DATA_FOUND: "Requested data found.",
    PROFILE_DETAILS: "Your profile details has been updated sucessfully.",
    STATUS_UPDATED: "Your Status has been changed successfully.",
    UPDATE_SUCCESS: "Successfully updated.",
    BLOCK_SUCCESS: "Successfully blocked.",
    UNBLOCK_SUCCESS: "Successfully activated.",
    DELETE_SUCCESS: "Successfully deleted.",
    SMS_SEND: "The SMS has been send to the buddies successfully.",
    DESTINATION_ADD: "Destination has been added successfully",
    SUB_ADMIN_CREATED: "Sub-admin has been created successfully",
    EDIT_SUCC: "Successfully edit",
    SESSION_CREATED: "Session created successfully",
    CODE_GENERATED: "Code generated successfully",
    JOIN_SUCCESS: "Session joined successfully",
    INVITATION_SUCCESS: "Invitaion sent",
    SESSION_DETAILS: "Session Join user list",
    REMOVE_SUCCESS: "Remove Successfully",
    SESSION_SONG_ADD: "Song added in session",
    SESSION_SONG_REMOVE: "Song removed from session",
    SONGS_LIST: "Songs list founds",
    LIST_EMPTY: "Empty List ",
    PLAYLIST_ADD: "Playlist has been added successfully.",
    SESSION_END: "Session ended without adding playlist.",
    SESSION_START: "Session started successfully.",
    LIMIT_EXCEED: "Limit exceeded.",
    TRANSACTION_SUCCESS: "Transaction has been done successfully",
    UP_VOTE: "Up vote has been done successfully.",
    DOWN_VOTE: "Down vote has been done successfully.",
    WISHED_DATA: "Data has been wished sucessfully.",
    UNWISHED_DATA: "Data has been unwished sucessfully.",
    APPROVED: "Data has been approved successfully.",
    REJECTED: "Data has been rejected successfully.",
    FEATURED: "Data has been featured successfully.",
    UNFEATURED: "Data has been unfeatured successfully.",
    ENABLE_SUCCESS: "Data has been enabled successfully.",
    DISABLE_SUCCESS: "Data has been disabled successfully.",
    UPLOAD_SUCCESS:"Upload success.",
    WALLET_CONN: "Wallet successfully connected.",
    VOTE_ADD:"User vote added successfully.",
    SLOT:"Slot purchased successfully."
});