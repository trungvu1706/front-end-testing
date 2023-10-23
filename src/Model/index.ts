export interface MenuList {
  icon: string
  title: string
  path?: string
  notification?: number | string
}

export interface MyExerciseType {
  id: string
  title: string
  cal: number
  time: number
}

export interface MyDiaryType {
  id: string
  day: string
  time: string
  content: string
}
