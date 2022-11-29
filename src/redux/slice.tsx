import { createSlice } from '@reduxjs/toolkit';

const fakeData = [
  {
    id: 0,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
  {
    id: 1,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
  {
    id: 2,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },

  {
    id: 3,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
  {
    id: 4,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
  {
    id: 5,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },

  {
    id: 6,
    name: '株式会社エンジニアリング',
    location: '新宿区名古屋市北区金田町4-721-1',
    employmentStatus: '派遣社員',
    BusinessAndDuties: '家電量販店でのスマートフォン・インターネットの販売店。',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  },
  {
    id: 7,
    name: '株式会社APパートナーズ',
    location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
    employmentStatus: '契約社員',
    BusinessAndDuties: '設計開発・受託開発',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
  },
  {
    id: 8,
    name: '株式会社ITソリューションズ',
    location: '新宿区守口市佐太東町3-101-5',
    employmentStatus: '正社員',
    BusinessAndDuties: 'エンジニアアウトソーシング',
    wayOfWorking: 'シフト制(週休2日)',
    salaryL: '勤務地によって異なります',
    dutyStation: '東京、神奈川、埼玉、千葉',
    image:
      'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
  },
];

// const fakeData = [
//   {
//     id: 0,
//     name: '株式会社APパートナーズ',
//     location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
//     image:
//       'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
//   },
//   {
//     id: 1,
//     name: '株式会社ITソリューションズ',
//     location: '新宿区守口市佐太東町3-101-5',
//     image:
//       'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
//   },
//   {
//     id: 2,
//     name: '新宿区名古屋市北区金田町4-721-1',
//     location: '勤 務 地一都三県（東京都・埼玉県・千葉県・神奈川 県）',
//     image:
//       'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
//   },
//   {
//     id: 3,
//     name: '株式会社ITソリューションズ',
//     location: '新宿区守口市佐太東町3-101-5',
//     image:
//       'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
//   },
//   {
//     id: 4,
//     name: '新宿区名古屋市北区金田町4-721-1',
//     location: '勤 務 地一都三県（東京都・埼玉県・千葉県・神奈川 県）',
//     image:
//       'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
//   },
//   {
//     id: 5,
//     name: '株式会社APパートナーズ',
//     location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
//     image:
//       'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
//   },
//   {
//     id: 6,
//     name: '新宿区名古屋市北区金田町4-721-1',
//     location: '勤 務 地一都三県（東京都・埼玉県・千葉県・神奈川 県）',
//     image:
//       'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
//   },
//   {
//     id: 7,
//     name: '株式会社APパートナーズ',
//     location: '新宿区新宿2-6-4 新宿通り東洋ビル10F 東京',
//     image:
//       'https://s3.ap-northeast-1.amazonaws.com/uploaded-files.my-sto.com/companies/production/827680d7b35220e49e39f6899fddaecf.png',
//   },
//   {
//     id: 8,
//     name: '株式会社ITソリューションズ',
//     location: '新宿区守口市佐太東町3-101-5',
//     image:
//       'https://img.thuthuattinhoc.vn/uploads/2019/01/13/anh-dep-vung-nui-viet-nam_105620901.jpeg',
//   },
// ];

const initialState: any[] = [];

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getItem(state, action) {
      console.log('redux', state);
      console.log('redux action', action);

      return [fakeData.find(item => item.id === action.payload)];
    },
    getCurrentItem(state) {
      return state;
    },
  },
});

const { reducer } = appSlice;
export const { getItem, getCurrentItem } = appSlice.actions;
export default reducer;
