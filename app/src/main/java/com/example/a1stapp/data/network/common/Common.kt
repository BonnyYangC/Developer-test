package com.example.a1stapp.data.network.common

import com.example.a1stapp.data.network.Retrofit

object Common {
    private const val BASE_URL = "https://mobilelayer.edsprd01.aws.sbs.com.au/";

    fun <T> getApiService(service: Class<T>): T {
        return Retrofit.getRetrofitClient(BASE_URL).create(service)
    }
}