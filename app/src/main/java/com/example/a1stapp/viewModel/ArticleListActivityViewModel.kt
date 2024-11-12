package com.example.a1stapp.viewModel

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import com.example.a1stapp.data.repositories.ArticleRepo
import com.example.a1stapp.data.model.ResponseData

class ArticleListActivityViewModel: ViewModel() {

    private val articleRepo: ArticleRepo = ArticleRepo()
    val getArticleList: LiveData<ResponseData>
    get() = articleRepo.getArticleLiveData

}