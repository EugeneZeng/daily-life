<template>
  <b-row>
        <b-col cols="2">
            <b-form-select 
                v-show="courseList.length>0"
                v-model="selectedCourse" 
                :options="courseList"
                @change="onCourseChange" 
                class="mb-3" size="sm" />
            <b-list-group>
                <b-list-group-item button 
                    v-show="lessionList.length>0"
                    v-for="lession in lessionList" 
                    :active="selectedLession===lession"
                    :key="lession.replace(' ', '_') + Date.now()"
                    @click="onLessionChange(lession)">{{lession}}</b-list-group-item>
            </b-list-group>
        </b-col>
        <b-col>
            <b-row>
                <b-form-select 
                    v-show="videoList.length>0"
                    v-model="selectedvideo" 
                    :options="videoList"
                    @change="onvideoChange" 
                    class="mb-3" size="sm" />
            </b-row>
            <b-row>
                <b-embed type="video"
                        v-show="selectedvideo!=''"
                        aspect="16by9"
                        controls  :src="videoSrc"
                        allowfullscreen
                >
                </b-embed>
            </b-row>
        </b-col>
    </b-row>
</template>
<script>
import backend from "../backend";
export default {
  name: "videos",
  data() {
    return {
      videos: null,
      courseList: [],
      lessionList: [],
      videoList: [],
      selectedCourse: "",
      selectedLession: "",
      selectedvideo: "",
      videoSrc: "",
      subtitleSrc: ""
    };
  },
  created() {
    this.getVideoList();
  },
  methods: {
    getVideoList() {
      let _this = this;
      backend
        .getVideoList()
        .then(result => {
          if (result.data) {
            _this.videos = result.data;
            this.initData();
          }
        })
        .catch(e => {
          console.error(e);
        });
    },
    initData() {
      this.courseList = Object.keys(this.videos);
      this.selectedCourse = this.courseList[0];
      this.lessionList = Object.keys(this.videos[this.selectedCourse]);
      this.selectedLession = this.lessionList[0];
      this.videoList = this.videos[this.selectedCourse][this.selectedLession];
    },
    onCourseChange(course) {
      this.selectedCourse = course;
      this.lessionList = Object.keys(this.videos[this.selectedCourse]);
      this.selectedLession = this.lessionList[0];
    },
    onLessionChange(lession) {
      this.selectedLession = lession;
      this.videoList = Object.keys(
        this.videos[this.selectedCourse][this.selectedLession]
      );
      this.videoList = this.videoList.filter(item => {
        return /\.mp4$/.test(item);
      });
      this.selectedvideo = this.videoList[0];
    },
    onvideoChange(video) {
      this.selectedvideo = video;
      this.videoSrc = this.videos[this.selectedCourse][this.selectedLession][
        this.selectedvideo
      ];
      this.subtitleSrc = this.videos[this.selectedCourse][this.selectedLession][
        this.selectedvideo
      ];
      this.subtitleSrc = this.subtitleSrc.replace(".mp4", "-subtitle-en.srt");
    }
  }
};
</script>

