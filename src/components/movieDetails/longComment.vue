<template>
    <div>
        <article id="commentRegion" class="cinema_reviews">
          <h2>
            <a href="#!/movie/213190/comment/">
              <span class="i_tnext"></span>
              <b>精选影评（14）</b>
            </a>
          </h2>
          <dl>
            <dt>
              <a href="#!/review/detail/8190665/">“哥斯拉2”集齐“四大神兽”，谁不想看哥斯拉大战三头金龙？</a>
            </dt>
            <dd>
              <p>
                <a href="#!/review/detail/8190665/">
                  5月31日，《哥斯拉2：怪兽之王》即将登陆国内院线。
                  作为一部“怪兽片”，“哥斯拉2”虽然集合了维拉.法米加、章子怡..
                </a>
              </p>
            </dd>
          </dl>
          <ul>
            <li class="table">
              <div class="cine_user">
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fup%2F2018%2F10%2F18%2F163042.80633153_128X128.jpg&amp;width=80&amp;height=80&amp;clipType="
                  class="m_img"
                >
              </div>
              <div class="cine_txt td">
                <p>
                  <b>山鬼光影</b>
                </p>
                <p>
                  <b>2019-05-16 09:04:00 看过 - 评分</b>
                  <em class="m_score">
                    <i>7.0</i>
                  </em>
                </p>
              </div>
            </li>
          </ul>
        </article>
    </div>
</template>

<script>
export default {
    name: 'LongComment'
}
</script>

<style lang="scss" scoped>
.cinema_reviews {
  padding: .36rem .36rem .12rem;
  h2 a {
    display: block;
    color: #333;
    position: relative;
    b {
      font-size: .408rem;
      line-height: 1.2;
      overflow: hidden;
    }
  }
  dl {
    cursor: pointer;
    color: #333;
    dt {
      padding: .36rem 0 0;
      a {
          font-size: .384rem;
      }
    }
    dd {
        padding: .24rem 0 .24rem 0;
         p {
    font-size: .336rem;
    line-height: 1.5;
}
    }
  }
}
.cine_user {
    margin-right: .312rem;
    width: .96rem;
    height: .96rem;
    overflow: hidden;
    img {
      border-radius: 1.008rem;
    }
}
.cine_txt p {
    color: #777;
    line-height: 1.6;
    b {
    font-size: .312rem;
    font-weight: normal;
    display: inline-block;
    vertical-align: middle;
    }
}
.m_score {
    background: #659d0e;
    width: .48rem;
    height: .432rem;
    color: #fff;
    border-radius: 0;
    display: inline-block;
    overflow: hidden;
    line-height: .432rem;
    text-align: center;
    margin-left: .12rem;
    font-size: .264rem;
    vertical-align: middle;
}
</style>
