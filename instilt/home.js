import React from 'react'

import Script from 'dangerous-html/react'

import Component from './component'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

$(document).ready(function() {
    var $box = $('.time-box').mousedown(function() {
        $(this).toggleClass('time-box-highlight');
        var flag = $(this).hasClass('time-box-highlight')
        $box.on('mouseenter.highlight', function() {
            $(this).toggleClass('time-box-highlight', flag);
        });
    });
    $(document).mouseup(function() {
        $box.off('mouseenter.highlight')
    })
});

/*
const Home = (props) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['text']}>Heading</h1>
      <div className={styles['container01']}>
        <div className={styles['container02']}>
          <div className={styles['container03']}>
            <span className={styles['text01']}>
              <span>12:00 am</span>
              <br></br>
              <span>1:00 am</span>
              <br></br>
              <span>2:00 am</span>
              <br></br>
              <span>3:00 am</span>
              <br></br>
              <span>4:00 am</span>
              <br></br>
              <span>5:00 am</span>
              <br></br>
              <span>6:00 am</span>
              <br></br>
              <span>
                7:00 am
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>8:00 am</span>
              <br></br>
              <span>9:00 am</span>
              <br></br>
              <span>10:00 am</span>
              <br></br>
              <span>11:00 am</span>
              <br></br>
              <span>12:00 pm</span>
              <br></br>
              <span>1:00 pm</span>
              <br></br>
              <span>2:00 pm</span>
              <br></br>
              <span>3:00 pm</span>
              <br></br>
              <span>4:00 pm</span>
              <br></br>
              <span>5:00 pm</span>
              <br></br>
              <span>6:00 pm</span>
              <br></br>
              <span>7:00 pm</span>
              <br></br>
              <span>8:00 pm</span>
              <br></br>
              <span>9:00 pm</span>
              <br></br>
              <span>10:00 pm</span>
              <br></br>
              <span>11:00 pm</span>
              <br></br>
            </span>
          </div>
          <div className={styles['container04']}>
            <span className={styles['text50']}>Sunday</span>
            <div
              className={` ${styles['code-embed']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed002']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed004']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed006']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed008']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed010']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed012']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed014']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed016']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed018']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed020']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed022']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed024']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed026']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed028']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed030']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed032']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed034']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed036']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed038']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed040']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed042']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed044']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed046']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container05']}>
            <span className={styles['text51']}>sday</span>
            <div
              className={` ${styles['code-embed048']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed050']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed052']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed054']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed056']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed058']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed060']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed062']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed064']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed066']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed068']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed070']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed072']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed074']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed076']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed078']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed080']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed082']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed084']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed086']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed088']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed090']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed092']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed094']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container06']}>
            <span className={styles['text52']}>sday</span>
            <div
              className={` ${styles['code-embed096']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed098']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed100']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed102']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed104']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed106']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed108']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed110']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed112']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed114']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed116']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed118']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed120']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed122']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed124']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed126']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed128']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed130']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed132']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed134']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed136']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed138']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed140']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed142']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container07']}>
            <span className={styles['text53']}>Sunday</span>
            <div
              className={` ${styles['code-embed144']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed146']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed148']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed150']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed152']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed154']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed156']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed158']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed160']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed162']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed164']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed166']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed168']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed170']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed172']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed174']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed176']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed178']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed180']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed182']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed184']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed186']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed188']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed190']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container08']}>
            <span className={styles['text54']}>Sunday</span>
            <div
              className={` ${styles['code-embed192']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed194']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed196']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed198']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed200']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed202']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed204']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed206']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed208']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed210']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed212']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed214']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed216']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed218']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed220']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed222']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed224']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed226']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed228']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed230']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed232']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed234']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed236']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed238']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container09']}>
            <span className={styles['text55']}>Sunday</span>
            <div
              className={` ${styles['code-embed240']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed242']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed244']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed246']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed248']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed250']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed252']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed254']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed256']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed258']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed260']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed262']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed264']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed266']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed268']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed270']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed272']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed274']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed276']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed278']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed280']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed282']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed284']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed286']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
          <div className={styles['container10']}>
            <span className={styles['text56']}>Sunday</span>
            <div
              className={` ${styles['code-embed288']} ${projectStyles['top-time-box']} ${projectStyles['time-box']} `}
            >
              <Script
                html={`<div class="top-time-box time-box"></div>`}
              ></Script>
            </div>
            <div
              className={` ${styles['code-embed290']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed292']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed294']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed296']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed298']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed300']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed302']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed304']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed306']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed308']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed310']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed312']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed314']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed316']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed318']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed320']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed322']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed324']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed326']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed328']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed330']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed332']} ${projectStyles['time-box']} `}
            >
              <Script html={`<div class="time-box"></div>`}></Script>
            </div>
            <div
              className={` ${styles['code-embed334']} ${projectStyles['time-box']} ${projectStyles['bottom-time-box']} `}
            >
              <Script
                html={`<div class="bottom-time-box time-box"></div>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className={styles['container11']}>
          <div
            className={` ${projectStyles['colored-row-red']} ${projectStyles['box-top']} `}
          >
            <Script html={`<div class="colored-rows box-top"></div>`}></Script>
          </div>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <Component></Component>
          <div className={projectStyles['colored-row-white']}>
            <Script html={`<div class="colored-row-white"></div>`}></Script>
          </div>
          <div className={projectStyles['colored-row-red']}>
            <Script html={`<div class="colored-row-red"></div>`}></Script>
          </div>
          <div
            className={` ${projectStyles['colored-row-white']} ${projectStyles['box-bottom']} `}
          >
            <Script
              html={`<div class="box-bottom colored-row-white"></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <div className={styles['container12']}>
        <button
          type="button"
          className={` ${styles['button']} ${projectStyles['button']} `}
        >
          <span>
            <span>Create</span>
            <br></br>
          </span>
        </button>
        <button type="button" className={projectStyles['button']}>
          Button
        </button>
      </div>
    </div>
  )
}

export default Home
*/
