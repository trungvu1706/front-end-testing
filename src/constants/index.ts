import {
  iconDinner,
  iconDocument,
  iconInfo,
  iconLunch,
  iconMental,
  iconMorning,
  iconSnack,
  myBodyImg,
  myDairyImg,
  myExercise,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
} from '@/assets/images'
import { randomId } from '@/utils/helper.ts'
import { PATH_RECORD } from '@/routes'
import { MenuList } from '@/Model'

export const MENU_LIST: MenuList[] = [
  {
    icon: iconDocument,
    title: '自分の記録',
    path: PATH_RECORD,
  },
  {
    icon: iconMental,
    title: 'チャレンジ',
  },
  {
    icon: iconInfo,
    title: 'お知らせ',
  },
]

export const MEDALS = [iconMorning, iconLunch, iconDinner, iconSnack]

export const PICTURE_LIST = [
  {
    id: randomId(10),
    img: pic1,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic2,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic3,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic4,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic5,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic6,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic7,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic8,
    date: '05.21.Morning',
  },
]

export const FOOTER_LIST = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
]

export const CARD_LIST = [
  {
    id: randomId(10),
    title: 'BODY RECORD',
    desc: '自分のカラダの記録',
    bgImg: myBodyImg,
  },
  {
    id: randomId(10),
    title: 'MY EXERCISE',
    desc: '自分の運動の記録',
    bgImg: myExercise,
  },
  {
    id: randomId(10),
    title: 'MY DIARY',
    desc: '自分の日記',
    bgImg: myDairyImg,
  },
]
