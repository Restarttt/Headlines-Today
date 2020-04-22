import axios from 'axios'

const apiBaseUrl = 'https://www.shuipingguo.com/news/'

const HttpClient = {
    getList: (options) => {
        axios
            .get(apiBaseUrl, {
                params: options.params
            })
            .then(function(response) {
                options.callback && options.callback(response);
            })
            .catch(function(error) {
                options.failcallback && options.failcallback(error);
            })
            .then(function() {})
    },
}

export default HttpClient