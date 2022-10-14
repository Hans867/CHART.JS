/*
const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['🇩🇰', '🇸🇪', '🇳🇴', '🇬🇧'],
        datasets: [{
            label: 'Country exports',
            data: [1000, 825, 600, 375],
        }]
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 825, 600, 375],
        }]
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Kanye West', 'Taylor Swift'],
        datasets: [{
            data: [55, 45],
        }]
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Denmark',
            data: [1000, 825, 600, 375],
        },
            {
                label: 'Sverige',
                data: [900, 400, 600, 700],
            }]
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: ['🇩🇰', '🇸🇪', '🇳🇴', '🇬🇧'],
        datasets: [{
            label: 'Country exports',
            data: [1000, 825, 600, 375],
            backgroundColor: ['rgb(255, 0, 0)', 'rgb(210,210,210)', 'rgb(210,210,210)', 'rgb(210,210,210)'],
        }],
        options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }}
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [{
            label: 'TIKTOK views',
            data: [23, 77, 89, 70],
            backgroundColor: 'rgb(210,210,210)'
        },
            {
                label: 'YOUTUBE views',
                data: [67, 69, 58, 80],
                borderColor: 'rgb(60,196,179)'
            }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: "TIKTOK vs YOUTUBE views"
        },
            legend: {
                position: 'bottom'

        }
        }
    }
});

 */

/*

const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USA', 'CANADA', 'FRANKRIG', 'BRASILIEN', 'TYSKLAND'],
        datasets: [{
            label: 'USA - Biggest customer of Chinook',
            data: [523, 304, 195, 190, 156],
            backgroundColor: ['red', 'grey', 'grey', 'grey', 'grey']
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Top 5 countries with mose orders'
            },
            legend: {
                position: 'bottom'

            }
        }
    }
});

 */


