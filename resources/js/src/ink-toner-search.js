Vue.component("ink-toner-search", {
    name: 'InkTonerSearch',
    delimiters: ["((", "))"],
    template: `<div class="container">
        <h2>((title))</h2>
        <span>((description))</span>
        <div class="row">
            <select class="custom-select col-sm-3" v-model="selectedLevel2Category">
                <option selected>Bitte Druckermarke wählen</option>
                <option v-for="category in level2Options" :value="category" :key="category.id">((category.name))</option>
            </select>
            <select class="custom-select col-sm-3" v-model="selectedLevel3Category">
                <option selected>Bitte wählen Sie die Art der Suche</option>
                <option v-for="category in level3Options" :value="category" :key="category.id">((category.name))</option>
            </select>
            <select class="custom-select col-sm-3" v-model="selectedLevel4Category">
                <option selected>Bitte wählen Sie die Serie / Nr. aus</option>
                <option v-for="category in level4Options" :value="category" :key="category.id">((category.name))</option>
            </select>
            <select v-if="level5Options.length > 0" class="custom-select col-sm-3" v-model="selectedLevel5Category">
                <option selected>Bitte wählen Sie ihr Druckermodell aus</option>
                <option v-for="category in level5Options" :value="category" :key="category.id">((category.name))</option>
            </select>
            <a href="https://www.wasdazu.ch" rel="nofollow" title="Suche nach passenden Produkten für Ihren Drucker" class="col-sm-6 btn btn-primary btn-block toggle-basket-preview"><i class="fa fa-arrow-right"></i>Bitte passende Produkte anzeigen</a>
        </div>
    </div>`,
    props: [
        'title',
        'description',
        'level1Category',
        'level2Categories',
        'level3Categories',
        'level4Categories',
        'level5Categories'
    ],
    watch: {
        selectedLevel2Category: function () {
            this.selectedLevel3Category = null
            this.selectedLevel4Category = null
            this.selectedLevel5Category = null
        },
        selectedLevel3Category: function () {
            this.selectedLevel4Category = null
            this.selectedLevel5Category = null
        },
        selectedLevel4Category: function () {
            this.selectedLevel5Category = null
        }
    },
    data() {
        return {
            selectedLevel2Category: null,
            selectedLevel3Category: null,
            selectedLevel4Category: null,
            selectedLevel5Category: null,
        }
    },
    computed: {
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
    },
});
