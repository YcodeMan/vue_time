<template>
  <div>
    <section class="m_cinema">
      <div
        class="m_bg_cinema"
        style="background-image:url(//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F23%2F095633.44711442_1280X720X2.jpg&amp;width=420&amp;height=280&amp;clipType=);"
      >
        <div
          class="m_bg_img"
          style="background-image:url(//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F23%2F095633.44711442_1280X720X2.jpg&amp;width=420&amp;height=280&amp;clipType=);"
        ></div>
        <p></p>
      </div>
    </section>
    <article class="cinemabox">
      <div
        class="cinema_pic"
        data-trailer="{url:http://vfx.mtime.cn/Video/2019/05/23/mp4/190523092929709049.mp4&quot;,&quot;title&quot;: &quot;哥斯拉2：怪兽之王 终极预告&quot;,&quot;videoId&quot;: &quot;74838&quot;}"
        data-trailer-num="3"
        id="trailerButton"
      >
        <a :title="detail.titleCn">
          <img
            src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F23%2F095633.44711442_1280X720X2.jpg&amp;width=210&amp;height=316&amp;clipType=4"
            class="m_img"
          >
          <div class="moviever">
            <i></i>
            <i class="i_cine_14"></i>
            <i class="i_cine_15"></i>
          </div>
        </a>
      </div>
      <div class="cinema_txt">
        <header>
          <h2>{{detail.titleCn}}</h2>
          <p>{{detail.titleEn}}</p>
          <b class="baidu_score">
            <em class="m_score">
              <i>{{detail.rating}}</i>
            </em>
          </b>
        </header>
        <ul>
          <li>
            <p>
              <b>有彩蛋</b> - {{detail.runTime}}
            </p>
          </li>
          <li>
            <p>{{detail.type[0]}} / {{detail.type[1]}} / {{detail.type[2]}}</p>
          </li>
          <li>
            <p>{{detail.release.date | timer()}}{{detail.release.location}}上映</p>
          </li>
        </ul>
        <aside class="m_cin_btn">
          <a href="javascript:void();" class="m_btn_ngray">
            <span>我想看</span>
          </a>
          <a
            href="javascript:void();"
            id="ratingButton"
            onclick="return false;"
            class="baidu_blue td m_btn_green"
          >
            <span>我要评分</span>
          </a>
        </aside>
      </div>
    </article>
    <ul class="cin_otherinfo">
      <li>
        <b>{{detail.commonSpecial}}</b>
      </li>
      <li id="ticketButton">
        <a class="m_btn_orange">
          <span>查影讯/购票</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  name: "DetailsInfo",
  computed: {
    ...Vuex.mapState({
      detail: state => state.indexMovie.detail,
    }),
  },
  filters: {
    timer(el){
      let arr = el.split('-');
      return arr[0] + '年'+ arr[1] + '月' + arr[2] + '日';
    }
  }
};
</script>

<style lang="scss" scoped>
.m_cinema {
  margin-top: -1.056rem;
}

.m_bg_cinema {
  height: 3.36rem;
  background-color: #4c4c4c;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background-size: 100% auto;
  &::after {
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
.m_bg_cinema .m_bg_img {
  background-size: 100% auto;
  height: 3.36rem;
  background-repeat: no-repeat;
  background-position: center top;
  filter: blur(12px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.m_bg_cinema p {
  height: 3.36rem;
  background: url(//static1.mtime.cn/html5/20190530163934/images/2014/cinemainfo_bg.png)
    no-repeat center bottom;
  background-size: auto 0.96rem;
  position: relative;
  z-index: 2;
}

/* cinemabox */
.cinemabox {
  margin-top: -2.184rem;
  padding: 0 0 0 0.36rem;
  z-index: 1;
  position: relative;
  width: 100%;
  display: flex;
}

.cinemabox .cinema_pic {
  overflow: hidden;
  background: #fff;
  margin-right: 0.24rem;
  padding: 0.048rem;
  width: 2.616rem;
  height: 3.84rem;
  display: block;
  a {
    width: 2.52rem;
    height: 3.744rem;
    display: block;
  }
}
.moviever {
  position: absolute;
  right: 0.24rem;
  top: 0.24rem;
  i {
    display: block;
    margin-bottom: 0.12rem;
    width: 0.768rem;
    height: 0.528rem;
  }
}

.cinema_txt {
  min-height: 3.912rem;
  header {
    color: #fff;
    margin-top: 0.12rem;
    position: relative;
    margin-bottom: 0.384rem;
    margin-right: 0.36rem;
    h2 {
      font-size: 0.432rem;
      line-height: 1.4;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.cinemabox .cinema_txt header p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 0.312rem;
}
.cinemabox .cinema_txt .baidu_score {
  background: #659d0e;
  display: block;
  width: 0.672rem;
  height: 0.672rem;
  padding: 0;
  text-align: center;
  line-height: 0.672rem;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: 0.456rem;
}
.cinemabox .cinema_txt header .m_score {
  border-radius: 0;
  margin: 0;
  padding: 0;
  width: 100%;
}

.cinemabox .cinema_txt header .m_score i {
  font-weight: normal;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 0.336rem;
}

.cinemabox .cinema_txt header p,
.cinemabox .cinema_txt li p {
  font-size: 0.288rem;
  line-height: 1.4;
}
.cinemabox .cinema_txt li {
  padding-bottom: 0.096rem;
  font-weight: bold;
}
.cinemabox .cinema_txt li p b {
  color: #659d0e;
  font-weight: normal;
}

.m_cin_btn {
  margin-top: 0.132rem;
  width: auto;
  display: block;
}

.m_cin_btn a {
  display: inline-block;
  margin-right: 0.12rem;
  padding: 0.228rem 0;
  border-radius: 9.6rem;
  text-align: center;
  min-width: 1.932rem;
}

.m_cin_btn a span {
  font-size: 0.336rem;
}
.m_btn_ngray {
  border: 1px solid #999;
  color: #777;
}
.m_btn_green {
  border: 1px solid #659c0d;
  color: #659c0d;
}

/* cin_otherinfo */
.cin_otherinfo {
  padding: 0.192rem 0 0.288rem;
}

.cin_otherinfo li {
  text-align: center;
}

.cin_otherinfo li:first-child {
  color: #fd8900;
}

.cin_otherinfo li b {
  font-weight: normal;
  font-size: 0.336rem;
}

.cin_otherinfo .m_btn_orange {
  width: auto;
  display: block;
  padding: 0.276rem 0;
  margin: 0.348rem 0.36rem 0.024rem;
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
  border-radius: 9.6rem;
  text-align: center;
  min-width: 1.932rem;
}

.cin_otherinfo .m_btn_orange span {
  font-size: 0.384rem;
  line-height: 1;
  font-weight: bold;
}
</style>

