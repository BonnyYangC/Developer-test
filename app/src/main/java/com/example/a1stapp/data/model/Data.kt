package com.example.a1stapp.data.model

data class Data(val limit: String,
                val page: String,
                val sections: Map<String, List<Article>>?) {
    val articles: List<Article>?
        get() = sections?.values?.firstOrNull()
}