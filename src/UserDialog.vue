<template>
  <b-modal ref="userDialog" :id="this.modalId" hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group id="userName"
                    label="User Name:" label-for="userName">
            <b-form-input id="userNameInput"
                        type="text" v-model="form.name" required
                        placeholder="User Name"
            ></b-form-input>
        </b-form-group>
        <b-form-group id="userRole"
                    label="Role:" label-for="userRole">
            <b-form-select id="userRoleInput"
                      :options="roles" required
                      v-model="form.role"
            ></b-form-select>
        </b-form-group>
        <b-form-group id="userFace"
                    label="Face:" label-for="userFace">
            <b-form-file id="userFaceInput" v-model="form.face" @change="onChange"></b-form-file>
        </b-form-group>
        <b-form-group>
            <canvas ref="faceCanvas" v-show="form.face!=''" width="200" height="200"></canvas>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
      </b-form>
  </b-modal>
</template>
<script>
    export default{
        name: "userDialog",
        props: {
            modalId: {
                type: String,
                user: Object
            }
        },
        data(){
            return {
                roles: [
                    { text:'Select One', value:null },
                    "kits", "parents", "family"
                ],
                form: {
                    name: "",
                    role: "",
                    face: ""
                }
            }
        },
        watch: {
            user(value){
                this.form.name = this.user.name;
                this.form.role = this.user.role;
                this.form.face = this.user.face;
                return value;
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();
                this.$emit("submitUser", this.form);
                this.form.name = "";
                this.form.role = "";
                this.form.face = "";
                this.$refs.userDialog.hide();
            },
            onChange(e){
                let file = e.target.files[0];
                if(!file){
                    console.error("File not available.");
                    return;
                }
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.addEventListener("load", this.onFileLoad, false);
            },
            onFileLoad(e){
                let _this = this;
                let dataURL = e.target.result;
                let img = new window.Image();
                img.src = dataURL;
                img.onload = function () {
                    let canvas = _this.$refs.faceCanvas;
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, 200, 200);
                    _this.form.face = canvas.toDataURL();
                };
            }
        }
    }
</script>
