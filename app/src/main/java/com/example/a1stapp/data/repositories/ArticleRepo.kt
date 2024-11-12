package com.example.a1stapp.data.repositories

import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.example.a1stapp.data.network.ApiService
import com.example.a1stapp.data.network.common.Common
import com.example.a1stapp.data.model.ResponseData
import retrofit2.Callback
import retrofit2.Call
import retrofit2.Response

class ArticleRepo {
    private val apiService: ApiService? by lazy {
       Common.getApiService(ApiService::class.java)
    }

    companion object {
        private const val TAG = "ArticleRepo"
    }

    val getArticleLiveData: MutableLiveData<ResponseData>
    get() {
        val data: MutableLiveData<ResponseData> = MutableLiveData<ResponseData>()

        apiService?.getSections("/news/collection/top-stories", 20, 0)?.enqueue(object: Callback<ResponseData> {
            override fun onResponse(call: Call<ResponseData>, response: Response<ResponseData>) {
                if (response.isSuccessful) {
                    data.value = response.body()
                }
                else {
                    data.value = null
                }
            }

            override fun onFailure(call: Call<ResponseData>, t: Throwable) {
                t.printStackTrace()
                Log.e("error", t.message.toString())
                data.value = null
            }
        })
        return data
    }
}