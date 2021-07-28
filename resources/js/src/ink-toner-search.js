import "../../scss/styles.scss";

Vue.component("ink-toner-search", {
    name: 'InkTonerSearch',
    delimiters: ["((", "))"],
    template: `<div :style="cssVars" class="container bg-white p-3">
        <div class="m-2">
            <p class="display-3">((title))</p>
            <p class="my-3">((description))</p>
        </div>
        <div class="row search-steps">
            <div class="search-step col-sm" :class="hasSelection(selectedLevel2Category)">
                <div class="m-2">
                    <p class="h4">1. Marke</p>
                    <select class="custom-select" v-model="selectedLevel2Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level2Options" :value="category" :key="category.id">((category.name))</option>
                </select>
                </div>
            </div>
            <div class="search-step col-sm" :class="hasSelection(selectedLevel3Category)">
                <div class="m-2">
                    <p class="h4">2. Suche nach</p>
                    <select :disabled="!selectedLevel2Category" class="custom-select" v-model="selectedLevel3Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level3Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
                </div>
            </div>
            <div class="search-step col-sm" :class="hasSelection(selectedLevel4Category)">
                <div class="m-2">
                    <p v-if="level5Options.length > 0" class="h4">3. Serie</p>
                    <p v-else class="h4">3. Bitte wählen</p>
                    <select :disabled="!selectedLevel3Category" class="custom-select" v-model="selectedLevel4Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level4Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
                </div>
            </div>
            <div v-if="level5Options.length > 0" class="search-step col-sm" :class="hasSelection(selectedLevel5Category)">
                <div class="m-2">
                    <p class="h4">4. Druckermodell</p>
                    <select :disabled="!selectedLevel4Category" class="custom-select" v-model="selectedLevel5Category">
                        <option default :value="null" selected>Bitte wählen</option>
                        <option v-for="category in level5Options" :value="category" :key="category.id">((category.name))</option>
                    </select>
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
        'redirectUrlHash',
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
            if (this.hasNoMoreSelectionOptions) {
                this.redirectToMatchingProducts()
            }
        }
    },
    methods: {
        hasSelection: function (category) {
            return category ? 'done' : ''
        },
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
            if (this.targetUrl) {
                let url = document.location.origin + this.targetUrl
                if (this.redirectUrlHash) {
                    url += this.redirectUrlHash
                }
                document.location.href = url
            }
        }
    },
    data() {
        return {
            selectedLevel1Category: this.level1Category,
            selectedLevel2Category: null,
            selectedLevel3Category: null,
            selectedLevel4Category: null,
            selectedLevel5Category: null,
        }
    },
    computed: {
        hasNoMoreSelectionOptions: function() {
            if (this.selectedLevel2Category && this.level3Options.length === 0) {
                return true
            }
            if (this.selectedLevel3Category && this.level4Options.length === 0) {
                return true
            }
            if (this.selectedLevel4Category && this.level5Options.length === 0) {
                return true
            }
            return !!this.selectedLevel5Category;
        },
        cssVars() {
            return {
                '--primaryColor': "#aa6f28",
                '--secondaryColor': "#c29e9e",
            }
        },
        level2Options: function () {
            if (this.level1Category) {
                return this.level2Categories.sort(function (a, b) {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                });
            } else {
                return []
            }
        },
        level3Options: function () {
            if (this.selectedLevel2Category) {
                return this.level3Categories.filter(category => category.parentCategoryId === this.selectedLevel2Category.id)
                    .sort(function (a, b) {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    });
            } else {
                return []
            }
        },
        level4Options: function () {
            if (this.selectedLevel3Category) {
                return this.level4Categories.filter(category => category.parentCategoryId === this.selectedLevel3Category.id)
                    .sort(function (a, b) {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    });
            } else {
                return []
            }
        },
        level5Options: function () {
            if (this.selectedLevel4Category) {
                return this.level5Categories.filter(category => category.parentCategoryId === this.selectedLevel4Category.id)
                    .sort(function (a, b) {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    });
            } else {
                return []
            }
        },
        currentPathName: function () {
            return window.location.pathname
        },
        targetUrl: function () {
            let targetUrl = ""
            function concatenateNameUrl(category) {
                targetUrl += `/${category.nameUrl}`
            }
            function concatenateNameUrlIfCategorySelected(category) {
                if (category) {
                    concatenateNameUrl(category)
                }
            }
            concatenateNameUrlIfCategorySelected(this.selectedLevel1Category)
            concatenateNameUrlIfCategorySelected(this.selectedLevel2Category)
            concatenateNameUrlIfCategorySelected(this.selectedLevel3Category)
            concatenateNameUrlIfCategorySelected(this.selectedLevel4Category)
            concatenateNameUrlIfCategorySelected(this.selectedLevel5Category)
            // Remove leading slash if it is present in the string
            return targetUrl
        }
    },
});
