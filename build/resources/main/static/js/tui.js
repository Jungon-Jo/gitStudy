const editor = new toastui.Editor({
    el: document.querySelector('#content'), // 에디터를 적용할 요소
    height: '500px',                        // 에디터 영역의 높이 값(000px || auto)
    initialEditType: 'markdown',            // 최초로 보여줄 에디터 타입(markdown || wysiwyg)
    initialValue: '내용을 입력해 주세요.',     // 내용의 초기 값으로, 반드시 마크다운 문자열 형태여야 함
    previewStyle: 'vertical'                // 마크다운 프리뷰 스타일(tab || vertical)
});


// 막대 차트 데이터
const barChartData = {
    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000]
        },
        {
            name: 'Income',
            data: [8000, 4000, 7000, 2000, 6000, 3000, 5000]
        },
        {
            name: 'Expenses',
            data: [4000, 4000, 6000, 3000, 4000, 5000, 7000]
        },
        {
            name: 'Debt',
            data: [3000, 4000, 3000, 1000, 2000, 4000, 3000]
        }
    ]
};

// 라인 차트 데이터
const lineChartData = {
    categories: [
        '01/01/2020',
        '02/01/2020',
        '03/01/2020',
        '04/01/2020',
        '05/01/2020',
        '06/01/2020',
        '07/01/2020',
        '08/01/2020',
        '09/01/2020',
        '10/01/2020',
        '11/01/2020',
        '12/01/2020',
    ],
    series: [
        {
            name: 'Seoul',
            data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.4, 13.9, 6.6, -0.6],
        },
        {
            name: 'Seattle',
            data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.6, 3.7],
        },
    ],
};

// Pie 차트 데이터
const pieChartData = {
    categories: ['Browser'],
    series: [
        {
            name: 'Chrome',
            data: 46.02,
        },
        {
            name: 'IE',
            data: 20.47,
        },
        {
            name: 'Firefox',
            data: 17.71,
        },
        {
            name: 'Safari',
            data: 5.45,
        },
        {
            name: 'Opera',
            data: 3.1,
        },
        {
            name: 'Etc',
            data: 7.25,
        },
    ],
};

// 히트맵 차트 데이터
const heatmapChartData = {
    categories: {
        x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y: ['Morning', 'Afternoon', 'Evening']
    },
    series: [
        [20, 30, 25, 40, 50],
        [10, 15, 30, 35, 45],
        [5, 10, 15, 20, 25]
    ]
};

// Bubble 차트 데이터
const bubbleChartData = {
    series: [
        {
            name: 'Africa',
            data: [
                { x: 30, y: 100, r: 10, label: 'Morocco' },
                { x: 40, y: 200, r: 30, label: 'Egypt' },
            ],
        },
        {
            name: 'America',
            data: [
                { x: 60, y: 40, r: 50, label: 'Canada' },
                { x: 50, y: 300, r: 10, label: 'United States' },
            ],
        },
        {
            name: 'Asia',
            data: [
                { x: 10, y: 150, r: 20, label: 'Korea, South' },
                { x: 20, y: 200, r: 30, label: 'Singapore' },
            ],
        },
    ],
};

// Radar 차트 데이터
const radarChartData = {
    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
        {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000],
        },
        {
            name: 'Income',
            data: [8000, 4000, 7000, 2000, 6000, 3000],
        },
        {
            name: 'Expenses',
            data: [4000, 4000, 6000, 3000, 4000, 5000],
        },
        {
            name: 'Debt',
            data: [3000, 4000, 3000, 1000, 2000, 4000],
        },
    ],
};
// 공통 옵션
const commonOptions = {
    chart: { width: 700, height: 300 },
};

// 막대 차트 생성 및 렌더링
const barChartContainer = document.getElementById('barChart');
const barChart = new toastui.Chart.barChart({ el: barChartContainer, data: barChartData, options: commonOptions });

// 라인 차트 생성 및 렌더링
const lineChartContainer = document.getElementById('lineChart');
const lineChart = new toastui.Chart.lineChart({ el: lineChartContainer, data: lineChartData, options: commonOptions });

// 원형 차트 생성 및 렌더링
const pieChartContainer = document.getElementById('pieChart');
const pieChart = new toastui.Chart.pieChart({ el: pieChartContainer, data: pieChartData, options: commonOptions });

// 히트맵 차트 생성 및 렌더링
const heatmapChartContainer = document.getElementById('heatmapChart');
const heatmapChart = new toastui.Chart.heatmapChart({ el: heatmapChartContainer, data: heatmapChartData, options: commonOptions });

// Bubble 차트 생성 및 렌더링
const bubbleChartContainer = document.getElementById('bubbleChart');
const bubbleChart = new toastui.Chart.bubbleChart({ el: bubbleChartContainer, data: bubbleChartData, options: commonOptions });

// Radar 차트 생성 및 렌더링
const radarChartContainer = document.getElementById('radarChart');
const radarChart = new toastui.Chart.radarChart({ el: radarChartContainer, data: radarChartData, options: commonOptions });