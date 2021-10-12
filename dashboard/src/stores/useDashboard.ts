import * as r from 'ramda'
import * as ra from 'ramda-analytics'
import * as api from '@/api'

import { PromiseResult } from '@/types'
import { defineStore } from 'pinia'

interface State {
  isBusy: boolean
  error: string | null
  data: any
  periodInDays: number
}

export default defineStore({
  id: 'dashboard',
  state: (): State => {
    return {
      isBusy: false,
      error: null,
      data: null,
      periodInDays: 7
    }
  },
  getters: {
    unit (state): string {
      return state.periodInDays > 31 ? 'month' : 'day'
    }
  },
  actions: {
    /**
     * Fetch dashboard
     * @returns
     */
    async fetch (projectId: string): PromiseResult<any[]> {
      this.$patch({ isBusy: true, error: null })
      console.log('fetch dashboard')
      try {
        this.data = await api.fetchDashboard(projectId)
        this.$patch({ isBusy: false, error: null })
        return { data: this.data }
      } catch (e) {
        const error = e.error
        this.$patch({ isBusy: false, error })
        return { error }
      }
    }
  }
})
