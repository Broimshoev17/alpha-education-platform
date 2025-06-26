// src/store/studentStore.ts
import { defineStore } from 'pinia'

/** Оригинальная запись платежа из БЭКа */
export type Payment = {
  date: string   // ISO формат 'YYYY-MM-DD'
  amount: number
  status: string // 'Оплачено' или 'Не оплачено'
}

/** Запись платежа для фронта */
export interface PaymentEntry {
  date: string        // 'YYYY-MM-DD'
  amount: number
  paid: boolean       // true, если status === 'Оплачено'
}

/** Минимальный студент в списке */
export interface StudentMinimal {
  id: number
  name: string
  iin: string
  stream: string      // например 'A1', 'B2' или строка финансирования
  status: string      // 'active' | 'graduated'
  topStudent?: boolean
  paymentPeriod?: string
}

/** Полный объект студента для карточки */
export interface StudentFull extends StudentMinimal {
  email: string
  phone: string
  financing: string           // строка из financingOptions
  totalCoursePrice: number    // полная цена курса
  discountPercent: number     // процент скидки
  discountedPrice: number     // сумма по скидке
  paymentSchedule: PaymentEntry[]
}

export const useStudentStore = defineStore('student', {
  state: () => ({
    list: [] as StudentMinimal[],
    payments: {} as Record<number, Payment[]>,
    loading: false,
  }),
  actions: {
    /** Загрузка общего списка студентов */
    async fetchStudents() {
      this.loading = true
      await new Promise(r => setTimeout(r, 500))
      this.list = [
        { id: 1, name: 'Абдрахманов Ербол Нурланович', iin: '990101350128', stream: 'A1', status: 'active', paymentPeriod: 'Оплачена полная сумма'  },
        { id: 2, name: 'Абдулаева Динара Муратовна', iin: '870213400917', stream: 'B2', status: 'graduated', paymentPeriod: '4 месяца' },
        { id: 3, name: 'Абильдаев Тимур Канатович', iin: '950624300675', stream: 'A1', status: 'active' },
        { id: 4, name: 'Агайдарова Аружан Сериковна', iin: '010501600338', stream: 'B2', status: 'graduated' },
        { id: 5, name: 'Адельбеков Рауан Жанатович', iin: '880729450291', stream: 'A1', status: 'active' },
        { id: 6, name: 'Ажигалиева Гульмира Кайратовна', iin: '920912300141', stream: 'B2', status: 'graduated' },
        { id: 7, name: 'Акимов Николай Артёмович', iin: '011015400976', stream: 'A1', status: 'active' },
        { id: 8, name: 'Алибаева Ляззат Ержановна', iin: '780606350220', stream: 'B2', status: 'graduated' },
      ]
      this.loading = false
    },

    /**
     * Получить одного студента вместе с расписанием платежей
     */
    async fetchById(id: string): Promise<StudentFull> {
      this.loading = true
      await new Promise(r => setTimeout(r, 300))
      const sid = Number(id)
      const basic = this.list.find(s => s.id === sid)
      if (!basic) {
        this.loading = false
        throw new Error('Student not found')
      }
      // подгружаем raw-платежи
      const raw = await this.fetchPayments(id)
      this.loading = false

      // конвертируем в PaymentEntry
      const schedule: PaymentEntry[] = raw.map(p => ({
        date: p.date,
        amount: p.amount,
        paid: p.status === 'Оплачено' || p.status === 'Оплачен',
      }))

      // определяем параметры скидки по stream
      const financing = basic.stream
      const percentMap: Record<string, number> = {
        'A1': 100,
        'B2': 30,
        'A1_full': 70,
        // или любые другие ваши варианты
      }
      const discountPercent = percentMap[financing] ?? 0
      const totalCoursePrice = 850000
      const discountedPrice = Math.round(totalCoursePrice * (100 - discountPercent) / 100)

      return {
        ...basic,
        email: '',         // можно переписать при необходимости
        phone: '',         // можно переписать при необходимости
        financing,
        totalCoursePrice,
        discountPercent,
        discountedPrice,
        paymentSchedule: schedule,
      }
    },

    /**
     * Получить все raw-платежи студента
     */
    async fetchPayments(id: string): Promise<Payment[]> {
      const sid = Number(id)
      if (!this.payments[sid]) {
        await new Promise(r => setTimeout(r, 300))
        this.payments[sid] = [
          { date: '2025-05-01', amount: 100000, status: 'Оплачено' },
          { date: '2025-06-01', amount: 100000, status: 'Оплачено' },
          { date: '2025-07-01', amount: 100000, status: 'Не оплачено' },
        ]
      }
      return this.payments[sid]
    },

    /**
     * Получить raw-платежи за конкретную дату
     */
    async fetchPaymentsByDate(id: string, date: string): Promise<Payment[]> {
      const all = await this.fetchPayments(id)
      return all.filter(p => p.date === date)
    },
  },
})
