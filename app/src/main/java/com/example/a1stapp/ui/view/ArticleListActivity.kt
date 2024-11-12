package com.example.a1stapp.ui.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.a1stapp.ui.adapter.ArticlesAdapter
import com.example.a1stapp.R
import com.example.a1stapp.viewModel.ArticleListActivityViewModel
import com.example.a1stapp.data.model.Article

class ArticleListActivity : AppCompatActivity(), ArticlesAdapter.OnItemClickListener {

    private var articleListActivityViewModel: ArticleListActivityViewModel? = null
    private lateinit var articlesAdapter: ArticlesAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_article_list)

        val recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        articlesAdapter = ArticlesAdapter(this)
        recyclerView.adapter = articlesAdapter

        articleListActivityViewModel = ViewModelProvider(this)[ArticleListActivityViewModel::class.java]
        articleListActivityViewModel?.getArticleList?.observe(this){ responseData ->
            articlesAdapter.articles = responseData?.data?.articles
            articlesAdapter.notifyDataSetChanged()
        }
    }

    override fun onItemClick(article: Article?) {
        val intent = Intent(this@ArticleListActivity, ArticleActivity::class.java)
        intent.putExtra("title", article?.title)
        intent.putExtra("body", article?.description)
        intent.putExtra("image", article?.imageUrl)
        startActivity(intent)
    }
}