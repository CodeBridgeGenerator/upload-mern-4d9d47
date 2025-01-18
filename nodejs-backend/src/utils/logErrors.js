const { forEach } = require('lodash');

module.exports = function logErrors() {
    return (context) => {
        const { error, params } = context;

        // console.debug("Error Hook Triggered", params);

        if (error) {
            if (Array.isArray(error)) {
                error.forEach((error) => {
                    const errorData = {
                        serviceName: context.path,
                        error: error,
                        message: error.message,
                        stack: 'reactjs',
                        details: '',
                        createdBy:
                            params &&
                            params.user &&
                            typeof params.user._id !== 'undefined'
                                ? params.user._id
                                : null,
                        updatedBy:
                            params &&
                            params.user &&
                            typeof params.user._id !== 'undefined'
                                ? params.user._id
                                : null
                    };

                    if (userId != 'unknown')
                        context.app.service('errorLogs').create(errorData);
                });
            } else {
                const errorData = {
                    serviceName: context.path,
                    error: JSON.stringify(error),
                    message: error.message,
                    stack: 'reactjs',
                    details: '',
                    createdBy:
                        params &&
                        params.user &&
                        typeof params.user._id !== 'undefined'
                            ? params.user._id
                            : null,
                    updatedBy:
                        params &&
                        params.user &&
                        typeof params.user._id !== 'undefined'
                            ? params.user._id
                            : null
                };

                if (userId != 'unknown')
                    context.app.service('errorLogs').create(errorData);
            }
        }
        return context;
    };
};
