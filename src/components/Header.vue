<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand active to="/">Stock Trader</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav>
                <b-nav-item to="/portfolio" active-class="active">Portfolio</b-nav-item>
                <b-nav-item to="/stocks" active-class="active">Stocks</b-nav-item>
            </b-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item>End days</b-nav-item>
        <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>Save &amp; Load</em>
            </template>
            <b-dropdown-item href="#">Save Data</b-dropdown-item>
            <b-dropdown-item href="#">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
