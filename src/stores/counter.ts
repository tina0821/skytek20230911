import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
 
export const useDataStore = defineStore('data', {
    state() {
        return {
            dataLst: [
                {
                    id: 1,
                    imgUrl: 'src/assets/卡其帽-1024x1024.jpg',
                    title: 'フランキ ICE CREAM TRUCKER',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 2,
                    imgUrl: 'src/assets/封面4-1536x1536.jpg',
                    title: '「兩條船」實體專輯',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 3,
                    imgUrl: 'src/assets/專輯踢navyringer-1024x1024.jpg',
                    title: 'ALBUM COVER RINGER TEE NAVY',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 4,
                    imgUrl: 'src/assets/黑帽-1536x1536.jpg',
                    title: 'ONE MAN TWO BOATS TRUCKER',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 5,
                    imgUrl: 'src/assets/candleringernavy-1024x1024.jpg',
                    title: 'CANDLES BURNIN’ ON BOTH SIDES RINGER TEE NAVY',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 6,
                    imgUrl: 'src/assets/candlet-1536x1536.jpg',
                    title: 'CANDLES BURNIN’ ON BOTH SIDES RINGER TEE ',
                    price: '980.00',
                    num: 0
                },
                {
                    id: 7,
                    imgUrl: 'src/assets/covergrey-1024x1024.jpg',
                    title: 'ALBUM COVER TEE LIGHT GREY',
                    price: '980.00',
                    num: 0
                }
            ],
            dataL: [],
            totalNum: 0
        }
    }
})
 