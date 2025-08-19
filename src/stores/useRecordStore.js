import { create } from "zustand";

const useRecordStore = create((set) => ({
    records: [],
    addRecord: (record) => {
        set((state) => ({ records: [...state.records, record] }))
    },
    removeRecord: (id) => {
        set((state) => ({ records: state.records.filter((record) => record.id !== id)}))
    }
}))

export default useRecordStore