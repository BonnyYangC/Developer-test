package com.example.a1stapp.data.network

import com.example.a1stapp.data.model.ResponseData
import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query

interface ApiService {

    @GET("api/v1/sections/articles")
    fun getSections(
        @Query("sections") sections: String,
        @Query("limit") limit: Int,
        @Query("page") page: Int
    ): Call<ResponseData>
}