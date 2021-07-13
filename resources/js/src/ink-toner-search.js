import "../../scss/styles.scss";

Vue.component("ink-toner-search", {
    name: 'InkTonerSearch',
    delimiters: ["((", "))"],
    template: `<div :style="cssVars" class="container bg-white p-3">
        <div class="m-2">
            <p class="display-3">((title))</p>
            <p class="my-3">((description))</p>
        </div>
        <div class="row">   
            <div class="col-sm-3">
                <div class="start">
                    <div class="p-5">
                        <p class="h4 text-white">Druckermarke</p>
                        <select class="custom-select" v-model="selectedLevel2Category">
                            <option default :value="null" selected>Bitte wählen</option>
                            <option v-for="category in level2Options" :value="category" :key="category.id">((category.name))</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="middle">
                   <div class="p-5">
                    <p class="h4 text-white">Suchart</p>
                    <select :disabled="!selectedLevel2Category" class="custom-select" v-model="selectedLevel3Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level3Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="middle">
                  <div class="p-5">
                    <p v-if="level5Options.length > 0" class="h4 text-white">Serie</p>
                    <p v-else class="h4 text-white">Patronen Nr.</p>
                    <select :disabled="!selectedLevel3Category" class="custom-select" v-model="selectedLevel4Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level4Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
                    </div>
                </div>
            </div>  
            <div v-if="level5Options.length > 0" class="col-sm-3">
                <div class="end">
                  <div class="p-5">
                    <p class="h4 text-white">Druckermodell</p>
                    <select :disabled="!selectedLevel4Category" class="custom-select" v-model="selectedLevel5Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level5Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    props: [
        'title',
        'description',
        'level1Category',
        'level2Categories',
        'level3Categories',
        'level4Categories',
        'level5Categories',
    ],
    watch: {
        selectedLevel2Category: function () {
            this.resetLevel3Selection()
            this.resetLevel4Selection()
            this.resetLevel5Selection()
        },
        selectedLevel3Category: function () {
            this.resetLevel4Selection()
            this.resetLevel5Selection()
        },
        selectedLevel4Category: function () {
            this.resetLevel5Selection()
        },
        reachedLastLevel: function () {
            if (this.reachedLastLevel) {
                this.redirectToMatchingProducts()
            }
        }
    },
    methods: {
        resetLevel3Selection() {
            this.selectedLevel3Category = null
        },
        resetLevel4Selection() {
            this.selectedLevel4Category = null
        },
        resetLevel5Selection() {
            this.selectedLevel5Category = null
        },
        redirectToMatchingProducts() {
            window.location.href = this.targetUrl;
        }
    },
    data() {
        return {
            selectedLevel2Category: null,
            selectedLevel3Category: null,
            selectedLevel4Category: null,
            selectedLevel5Category: null,
            reachedLastLevel: false,
            targetUrl: null,
        }
    },
    computed: {
        cssVars() {
            return {
                '--primaryColor': "#aa6f28",
                '--secondaryColor': "#c29e9e",
            }
        },
        level2Options: function () {
            if (this.level1Category) {
                return this.level2Categories
            } else {
                return []
            }
        },
        level3Options: function () {
            if (this.selectedLevel2Category) {
                return this.level3Categories.filter(category => category.parentCategoryId === this.selectedLevel2Category.id)
            } else {
                return []
            }
        },
        level4Options: function () {
            if (this.selectedLevel3Category) {
                return this.level4Categories.filter(category => category.parentCategoryId === this.selectedLevel3Category.id)
            } else {
                return []
            }
        },
        level5Options: function () {
            if (this.selectedLevel4Category) {
                return this.level5Categories.filter(category => category.parentCategoryId === this.selectedLevel4Category.id)
            } else {
                return []
            }
        },
        currentPathName: function () {
            return window.location.pathname
        },
    },
});
