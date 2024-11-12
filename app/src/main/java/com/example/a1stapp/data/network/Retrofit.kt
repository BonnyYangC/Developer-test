package com.example.a1stapp.data.network

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object Retrofit {
    private var retrofit: Retrofit? = null
    fun getRetrofitClient(baseUrl: String): Retrofit {
        val client = OkHttpClient.Builder().build()

        if (retrofit== null) {
            retrofit = Retrofit.Builder()
                .baseUrl(baseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build()
        }
        return retrofit!!
    }
}